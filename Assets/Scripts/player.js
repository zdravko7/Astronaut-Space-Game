#pragma strict

var movementSpeed = 0.7;
var projectile : Rigidbody2D;
var projectileSpeed = 20;
var obstacle : Rigidbody2D;
var circle : GameObject;

function Start () {
    //Resets score
    PlayerPrefs.SetInt("Score", 0);
}

var targetPoint:Vector3;

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

/*function createCircle(x : float, y : float,xradius : float, yradius : float, segments : float, angle : float) {
 
    var xo = 0;
    var yo = 0;
    var xn = 0;
    var yn = 0;
 
    for (var i = 0; i < (segments + 1); i++) {
        xn = Mathf.Sin(Mathf.Deg2Rad * angle) * xradius;
        yn = Mathf.Cos(Mathf.Deg2Rad * angle) * yradius;
        if (i > 0)
            Handles.DrawLine(new Vector2(x + xn, y + yn), new Vector2(x + xo, y + yo));
        xo = xn;
        yo = yn;
        angle += (360.0 / segments);
    }
}*/

    /*function CreatePoints ()
    {
        var x;
        var y;
        var z = 0.0;
       
        var angle = 20.0;
       
        for (var i = 0; i < (segments + 1); i++)
        {
            x = Mathf.Sin (Mathf.Deg2Rad * angle) * xradius;
            y = Mathf.Cos (Mathf.Deg2Rad * angle) * yradius;
                   
            line.SetPosition (i,new Vector3(0,0,0) );
                   
            angle += (360.0 / segments);
        }
    }*/