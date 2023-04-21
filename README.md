# airway-backend

- **User**
    - [Registration]()
    - [Login]()
    - [CheckAuth]()

- **Site functional**
    - [Get country code](https://github.com/top-aleksei/airway-backend#get-country-code)





**Get country code**
----
Returns all country code.

<details>

* **URL**

    /country-codes

* **Method:**

    `GET`

* **Headers:**

'Content-Type': 'application/json'

*  **URL Params**

    None

* **Query Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      {
        "countryCodes":  [
                {
                "country": "Australia",
                "code": "+61"
                },
                {
                "country": "Austria",
                "code": "+43"
                },
                {
                "country": "Azerbaijan",
                "code": "+994"
                },
                
          ]
      }
    ```
 
* **Error Response:**

    {message: `Get all country codes error`}
  
* **Notes:**

    None

</details>