#pragma strict

var lineMaterial : Material;

function Start () {
    var lineRenderer = gameObject.AddComponent(LineRenderer);
    lineRenderer.material = lineMaterial; //add a material
    lineRenderer.SetColors(Color.red, Color.red);
    lineRenderer.SetVertexCount(2);
    lineRenderer.SetWidth(0.03, 0.03);
}

function Update () {
    var mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition + Vector3.forward * 10.0);
    var dir = mousePos - transform.position;

    var lineRenderer = GetComponent(LineRenderer);
    lineRenderer.SetPosition(0, dir*100000);
    lineRenderer.SetPosition(1, new Vector3(transform.position.x, transform.position.y, 0));
}