#pragma strict

function Start () {

}

function startLevel() {
    Application.LoadLevel ("gameScene"); 
}

function restartLevel() {
    Application.LoadLevel ("gameScene"); 
}

function quitGame() {
    Application.LoadLevel("menuScene");
}