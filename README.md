# Checkout-App

![kredi hesaplama araci](https://github.com/kaplanh/Kredi-Hesaplama-Uygulamasi/assets/101884444/a24bb7a7-d960-4615-994e-8926818d4dac)


[Click Me!](https://kaplanh.github.io/Kredi-Hesaplama-Uygulamasi/)

## Description

The project aims to create a Credit Calculator using JS and Bootstrap.

## Problem Statement

- Your company has recently started on a project that aims to create a Credit Calculator. So you and your colleagues have started to work on the project.

## Project Skeleton 

```
Monthly Expense Tracking Application (folder)
|
|----readme.md                        
|----index.html  
|----app.js
``` 


### At the end of the project, the following topics are to be covered;

- HTML
  - select input 
   ```
    <label for="select">Kredi:</label>
        
        <select id="select" class="form-select mb-3 mt-2">
          <option value="" selected>Seciniz</option>
          <option value="Konut Kredisi">Konut Kredisi</option>
          <option value="Ihtiyac Kredisi">Ihtiyac Kredisi</option>
          <option value="Arac Kredisi">Arac Kredisi</option>
        </select>
   
   ```
 
-Bootstrap
 - Bootstrap form
 - Bootstrap table
 - Bootstrap flex
 - Bootstrap btn
 - Bootstrap text
  
  
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



