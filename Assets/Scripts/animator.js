#pragma strict

var timer = 85;

function Start () {

}

function Update () {
    timer--;

    if (timer == 0) {
        Destroy(gameObject);
    } 
}