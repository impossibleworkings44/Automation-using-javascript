var robot=require('robotjs')
var fs=require('fs')

setTimeout(paint,2000)


function paint(){
    robot.moveMouseSmooth(18,1054)
    robot.mouseClick();
    robot.typeString("paint")
    robot.keyTap("enter")
    setTimeout(writeHi,2000)
    
}

function writeHi(){

//H
    robot.moveMouseSmooth(400,250)
    robot.mouseToggle("down","left")
    robot.dragMouse(400,450)
    robot.mouseToggle("up","left")

    robot.moveMouseSmooth(400,350)
    robot.mouseToggle("down","left")
    robot.dragMouse(600,350)
    robot.mouseToggle("up","left")

    robot.moveMouseSmooth(600,250)
    robot.mouseToggle("down","left")
    robot.dragMouse(600,450)
    robot.mouseToggle("up","left")
//I
    robot.moveMouseSmooth(700,250)
    robot.mouseToggle("down","left")
    robot.dragMouse(900,250)
    robot.mouseToggle("up","left")

    robot.moveMouseSmooth(800,250)
    robot.mouseToggle("down","left")
    robot.dragMouse(800,450)
    robot.mouseToggle("up","left")

    robot.moveMouseSmooth(700,450)
    robot.mouseToggle("down","left")
    robot.dragMouse(900,450)
    robot.mouseToggle("up","left")

    //minimize paint

    robot.moveMouseSmooth(1798,5)
    robot.mouseClick()
    setTimeout(openChrome,2000)

}

function openChrome(){
    robot.moveMouseSmooth(18,1054)
    setTimeout(function()
    {
        robot.mouseClick();
        robot.typeString("chrome")
        robot.keyTap("enter")
        setTimeout(openTabs,2000)
        

    },2000)

}

function openTabs(){

    var rdata=fs.readFileSync("./chrome.json")
    var tabs=JSON.parse(rdata)

    for(var i=0;i<tabs.length;i++)
    {
        for(var j=0;j<tabs[i].length;j++)
        {
            robot.typeString(tabs[i][j])
            robot.keyTap("enter")

            //opens new tab in current window
            if(j<tabs[i].length-1)
            {
                robot.keyToggle("control","down")
                robot.keyTap("t")
                robot.keyToggle("control","up")
            }

            //opens new window in chrome
            else if (i<tabs.length-1)
            {
                robot.keyToggle("control","down")
                robot.keyTap("n")
                robot.keyToggle("control","up")

            }
        }
    }

    setTimeout(openNotepad,2000)
}

///notepad

function openNotepad(){
    robot.moveMouseSmooth(18,1054)
    setTimeout(function()
    {
        robot.mouseClick();
        robot.typeString("notepad")
        robot.keyTap("enter")
        setTimeout(writeNotepad,2000)
        

    },2000)

   

}

function writeNotepad(){
    robot.typeString("let's start")
}
