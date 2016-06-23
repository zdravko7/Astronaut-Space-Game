#pragma strict

var projectileSpeed = 8;
var animationTime = 0;
var animator : GameObject;

function Start () {
}

function Update () {
    transform.Translate(Vector2.up * Time.deltaTime * projectileSpeed);
}

function OnCollisionEnter2D (col : Collision2D) {
    if (col.gameObject.tag == "obstacle") {
        GetComponent(Animator).enabled = true;

        Instantiate(animator, new Vector3(col.gameObject.transform.position.x, col.gameObject.transform.position.y, 0), col.gameObject.transform.rotation);

        Destroy(gameObject);
        Destroy(col.gameObject);
    }
}