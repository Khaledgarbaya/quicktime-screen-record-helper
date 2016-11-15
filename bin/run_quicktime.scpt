on run argv
set thePosition to 50
set theWidth to 1280
set theHeight to 720
set theFullPath to item 1 of argv

tell application "QuickTime Player"
    activate
    new screen recording
    delay 1
    tell application "System Events" to key code 49
    delay 1
    do shell script (theFullPath) & "/bin/clickdrag -x " & (thePosition) & " -y " & (thePosition) & " -dx " & (theWidth) & " -dy " & (theHeight)
end tell
end run
