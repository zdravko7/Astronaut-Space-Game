#pragma strict

var projectileSpeed = 8;
var animationTime = 0;
var animator : GameObject;

function Update () {
    transform.Translate(Vector2.up * Time.deltaTime * projectileSpeed);
}

function OnCollisionEnter2D (col : Collision2D) { 
    if (col.gameObject.tag == "obstacle" || col.gameObject.tag == "asteroid") {    
        if (col.gameObject.tag == "asteroid") {
            PlayerPrefs.SetInt("Score", PlayerPrefs.GetInt("Score") + 1);
        }

        GetComponent(Animator).enabled = true;

        Instantiate(animator, new Vector3(col.gameObject.transform.position.x, col.gameObject.transform.position.y, 0), col.gameObject.transform.rotation);

        Destroy(gameObject);
        Destroy(col.gameObject);
    }
}