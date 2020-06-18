using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public float speed = 21000f;
    public float jump = 2f;
     public Rigidbody rb;
  //  public GameObject player;

   void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    
    void FixedUpdate()
    {
        float haxis = Input.GetAxis("Horizontal");
        float vaxis = Input.GetAxis("Vertical");
        Vector3 movement = new Vector3(haxis * speed * Time.deltaTime, 0f, vaxis * speed * Time.deltaTime);


        rb.AddForce(movement);
       // Debug.Log(movement);

    
        if(Input.GetKey(KeyCode.Space))
        {
            rb.AddForce(0f,jump,0f);
        }
        if(Input.GetKey(KeyCode.K))
        {
            Destroy(rb);
        }

    }
}
