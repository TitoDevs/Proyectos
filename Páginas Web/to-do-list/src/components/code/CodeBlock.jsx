import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";
import "./codeblock.scss";

const CodeBlock = forwardRef(({ language, code }, ref) => {
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    try {
      if (codeRef.current) {
        navigator.clipboard.writeText(code);
        console.log("Código copiado al portapapeles");
      }
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
  };

  // Utiliza useImperativeHandle para exponer el ref de CodeBlock
  useImperativeHandle(ref, () => ({
    handleCopyClick,
  }));

  return (
    <div style={{ position: "relative", maxWidth: "1000px" }}>
      <SyntaxHighlighter language={language} style={{ ...darcula }}>
        {code}
      </SyntaxHighlighter>
      <button
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleCopyClick}
      >
        <FiCopy size={18} />
      </button>
    </div>
  );
});

export default CodeBlock;
