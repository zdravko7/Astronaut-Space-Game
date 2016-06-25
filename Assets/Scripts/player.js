#pragma strict

var movementSpeed = 0.7;
var projectile : Rigidbody2D;
var projectileSpeed = 20;
var obstacle : Rigidbody2D;
var circle : GameObject;
var targetPoint:Vector3;

function Start () {
    //Resets score
    PlayerPrefs.SetInt("Score", 0);
}

function Update () {

    //player shooting
    if (Input.GetKeyDown(KeyCode.Mouse0)) {
        //gets the mouse position in world coordinates
        var cursorInWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

        var clone : Rigidbody2D;
        clone = Instantiate(projectile, transform.position, transform.rotation);
        var newObstacle : Rigidbody2D;
        newObstacle = Instantiate(obstacle, cursorInWorldPos, transform.rotation);
    }

    //player movement
    var hitdist = 0;

    if (Input.GetKeyDown(KeyCode.Mouse1)) {
        var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        targetPoint = ray.GetPoint(hitdist);
        GetComponent(Animator).enabled = true;

        cursorInWorldPos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Instantiate(circle, new Vector3(cursorInWorldPos.x, cursorInWorldPos.y, 0), transform.rotation);
    }

    //handles player rotation
    var mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition + Vector3.forward * 10.0);
    var dir = mousePos - transform.position;
    var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
    
    transform.eulerAngles.z = angle - 90;
    transform.position = Vector3.Lerp (transform.position, targetPoint, Time.deltaTime * movementSpeed);   
    
    //updates score
    GameObject.Find("score").GetComponent(UI.Text).text = "Score: " + PlayerPrefs.GetInt("Score");
}