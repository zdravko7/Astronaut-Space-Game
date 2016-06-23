#pragma strict

var movementSpeed = 0.7;
var projectile : Rigidbody2D;
var projectileSpeed = 20;
var obstacle : Rigidbody2D;

function Start () {
    /*var lineRenderer = gameObject.AddComponent(LineRenderer);
    //lineRenderer.material = new Material(Shader.Find("Materials/physicsMaterial")); //add a material
    lineRenderer.SetColors(Color.red, Color.gray);
    lineRenderer.SetVertexCount(10);
    lineRenderer.SetWidth(0.2, 0.2);*/
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
    }

    //handles player rotation
    var mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition + Vector3.forward * 10.0);

    var dir = mousePos - transform.position;
    var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
    transform.eulerAngles.z = angle - 90;

    //draw the laser
    /*var lineRenderer = GetComponent(LineRenderer);
    lineRenderer.SetPosition(0, dir*10);
    */
    
    transform.position = Vector3.Lerp (transform.position, targetPoint, Time.deltaTime * movementSpeed);   
}

/*function createCircle(x, y)
{
    var line = new LineRenderer();

    var xo = 0;
    var yo = 0;
    var xn = 0;
    var yn = 0;
    var xradius = 50;
    var yradius = 50;
    var segments = 26;
    var angle = 0;

    for (var i = 0; i < ((segments) + 1); i++) {
        xn = Mathf.Sin(Mathf.Deg2Rad * angle) * xradius;
        yn = Mathf.Cos(Mathf.Deg2Rad * angle) * yradius;
        if (i > 0)
            Handles.DrawLine(new Vector2(x + xn, y + yn), new Vector2(x + xo, y + yo));
        xo = xn;
        yo = yn;
        angle += (360.0 / segments);
    }
}*/