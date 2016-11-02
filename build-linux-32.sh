g++ -m32 -o power-meter32 main.cpp
cd resources
node package.js
cd ..
echo 'echo "[Desktop Entry]">"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Version=1.0">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Name=Power meter">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Comment=Optical power meter with USB camera">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Type=Application">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Exec=\""$PWD"/power-meter32\"">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Icon="$PWD"/resources/icon/icon.png">>"power meter.desktop"'>>create-shortcut.sh
echo 'echo "Terminal=false">>"power meter.desktop"'>>create-shortcut.sh
echo 'chmod u+x "power meter.desktop"'>>create-shortcut.sh
chmod u+rwx create-shortcut.sh
./create-shortcut.sh
cd runtime
#download the runtime
wget "http://powermeter.luisvmf.com/electron-l32.zip"
#-----------------------------------------------------------
unzip electron-l32.zip
rm electron-l32.zip
cd ..
echo 'build complete!'
