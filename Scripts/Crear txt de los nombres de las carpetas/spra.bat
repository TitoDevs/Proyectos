@echo off

set "directorio=%~dp0"
set "archivo_salida=%directorio%\carpetas.txt"

echo Carpetas en el directorio: > %archivo_salida%
for /d %%I in (%directorio%\*) do echo %%~nxI >> %archivo_salida%

echo Se ha creado el archivo %archivo_salida%
