# Checkout App

![kredi hesaplama araci](https://github.com/kaplanh/Kredi-Hesaplama-Uygulamasi/assets/101884444/a24bb7a7-d960-4615-994e-8926818d4dac)


[Click Me!](https://kaplanh.github.io/Checkout-App/)

## Description

The project aims to create a Checkout App using JS and Bootstrap.

## Problem Statement

- Your company has recently started on a project that aims to create a Checkout App. So you and your colleagues have started to work on the project.

## Project Skeleton 

```
Checkout App (folder)
|
|----readme.md                        
|----index.html
|----style.css
|----app.js
|----img (folder)
``` 


### At the end of the project, the following topics are to be covered;

- HTML
  - font-awesome 
   ```
     <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />
   
   ```
 
-CSS
 - Nested CSS
 - text-decoration: line-through
 ```
    .nav__list--btn {
    color: orangered;
    font-size: 14px;
    cursor: pointer;

    & i:hover {
        color: white;
        border-radius: 50%;
        background-color: #ff7623;
    }
    }

.line-through {
    text-decoration: line-through;
}
   
   ```
- @media query

 ```
@media only screen and (max-width: 1150px) {
    .nav__list {
        padding: 0rem 1rem;
    }
  ```
  
  
- JS
  - DOM Manipulations
    - innerHTML
      ```
      sonuclar.innerHTML = `
        <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
        <table class="table table-bordered border-warning mt-4">
         <tbody>
          <tr>
            <th>Kredi Miktari</th>
            <td>${tutar.value} ₺</td>
            <th>Kredi Tipi</th>
            <td>${select.value}</td>
          </tr>
          <tr>
            <th>Vade</th>
            <td>${vade.value}</td>
            <th>Faiz Orani</th>
            <td>${oran}</td>
          </tr>
          <tr>
            <th>Toplam Tutar</th>
            <td>${(taksit * vade.value).toFixed(2)} ₺</td>
            <th>Taksit Tutari</th>
            <td>${taksit.toFixed(2)} ₺</td>
          </tr>
        </tbody>
      </table>
       `;
      ```
     
  - DOM Selectors
    
  - Events
    - click
    ```
          hesaplaBtn.addEventListener('click', (e) => {
        //? preventDefault() event'ın default davranışı (submit etmek ve formu silmek) engeller
        e.preventDefault();
        if (select.value === 'Konut Kredisi') {
          oran = 1.29;
        } else if (select.value === 'Ihtiyac Kredisi') {
          oran = 1.99;
        } else if (select.value === 'Arac Kredisi') {
          oran = 1.79;
        }
        if (!select.value || !vade.value || !tutar.value) {
          alert('Lutfen Kredi turu, Vade ve tutari giriniz');
        }
      
        const faiz = oran / 100;
        taksit =
          (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
          ((1 + faiz) ** vade.value - 1);
      
        // console.log(taksit);
        sonuclariGoster();
      });
    
    ```
  - Builtin functions
     - preventDefault()
  
  - if else - if - else conditions
 
     

  - String Methods( toFixed() )
   ```
   <td>${(taksit * vade.value).toFixed(2)} ₺</td>
  ```

    

### At the end of the project, developers will be able to;

- improve coding skills within HTML, Bootstrap and JS 

- use git commands (push, pull, commit, add etc.) and Github as a Version Control System.


## Notes

- You can use HTML, Bootstrap and JS to complete this project.



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>



