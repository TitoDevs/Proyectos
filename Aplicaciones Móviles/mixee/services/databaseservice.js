import { getDatabase, ref, push, set, onValue, onChildRemoved } from "firebase/database";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";

const db = getDatabase(app);
const auth = getAuth();
const currentUser = auth.currentUser;

const getPosts = (setPosts) => {
  const postsRef = ref(db, "posts");
  onValue(postsRef, (snapshot) => {
    if (snapshot.exists()) {
      const postsData = snapshot.val();
      const posts = Object.entries(postsData).map(([key, value]) => ({
        key,
        ...value,
      }));
      setPosts(posts);
    } else {
      console.log("No hay posts disponibles.");
      setPosts([]);
    }
  });

  onChildRemoved(postsRef, (snapshot) => {
    if (snapshot.exists()) {
      const deletedPostKey = snapshot.key;
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.key !== deletedPostKey)
      );
    }
  });
};

const getMyReservations = (setReservations) => {

  if (currentUser) {
    const userId = currentUser.uid;
    const reservationsRef = ref(db, `users/${userId}/reservations`);

    onValue(reservationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const reservationsData = snapshot.val();
        const reservations = Object.entries(reservationsData).map(
          ([key, value]) => ({
            key,
            ...value,
          })
        );
        setReservations(reservations);
      } else {
        console.log("No hay reservas disponibles para este usuario.");
        setReservations([]);
      }
    });
  } else {
    console.log("No hay un usuario autenticado.");
    setReservations([]);
  }
};

const getMyQrCodes = (setQrCodes) => {
  if (currentUser) {
    const userId = currentUser.uid;
    const qrCodesRef = ref(db, `users/${userId}/qrCodes`);

    onValue(qrCodesRef, (snapshot) => {
      if (snapshot.exists()) {
        const qrCodesData = snapshot.val();
        const qrCodes = Object.entries(qrCodesData).map(([key, value]) => ({
          key,
          ...value,
        }));
        setQrCodes(qrCodes);
      } else {
        console.log("No hay códigos QR disponibles para este usuario.");
        setQrCodes([]);
      }
    });
  } else {
    console.log("No hay un usuario autenticado.");
    setQrCodes([]);
  }
};

const handleScan = (scannedValue) => {
    if (currentUser) {
      const userId = currentUser.uid;
      const qrCodesRef = ref(db, "qrCodes");
      const userQrCodesRef = ref(db, `users/${userId}/qrCodes`);
  
      onValue(qrCodesRef, (snapshot) => {
        if (snapshot.exists()) {
          const qrCodesData = snapshot.val();
          const scannedQrCode = qrCodesData[scannedValue];
  
          if (scannedQrCode && scannedQrCode.isOpen) {
            const newQrCodeRef = push(userQrCodesRef);
            set(newQrCodeRef, { ...scannedQrCode, timestamp: Date.now() });
          } else {
            console.log("El código QR escaneado no está abierto o no existe.");
          }
        } else {
          console.log("No hay códigos QR disponibles.");
        }
      });
    } else {
      console.log("No hay un usuario autenticado.");
    }
  };

export { getPosts, getMyReservations, getMyQrCodes, handleScan };
