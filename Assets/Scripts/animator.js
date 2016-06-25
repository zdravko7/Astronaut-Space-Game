#pragma strict

var timer = 85;

function Update () {
    timer--;

    if (timer == 0) {
        Destroy(gameObject);
    } 
}