@ECHO OFF
CD .\client
Rem Changes emulator port to point to localhost port
adb reverse tcp:8080 tcp:8080
START cmd.exe /k "yarn start"
START cmd.exe /c "npx react-native run-android"
cd ..\server
START cmd.exe /k npm run start