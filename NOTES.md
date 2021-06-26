**Elemento pakeitimas ir pridejimas css pseudo selector, pasidarom
lista ir jam nuimam buletpoints ir vietoj jo sudedam check.img**

```html
<ul>
  <li>bla bla bla</li>
  <li>bla bla bla</li>
  <li>bla bla bla</li>
  <li>bla bla bla</li>
  <li>bla bla bla</li>
</ul>
```

```css
.labas::before {
  content: 'Labas,';
  margin-right: 10px;
}
.labas::after {
  content: '!';
}
ul {
  list-style: none;
  line-height: 24px;
  font-size: 32px;
}
ul > li::before {
  display: inline-block;
  content: '';
  background-image: url('../check.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
```

\*\*Pirmas pavyzdys kai rasome if if'e prie Formos validaciju:

```js
if (validationRule === 'email') {

 if (this.isValidEmail(value) === false) {
   allGood = false;
   console.error('ERROR: Bad email form');
   break;
}
```

\*\*Antras pavyzdys kai sutrumpinam if pridedami &&:

```js
if (validationRule === 'name' && !this.isValidName(value)) {
                    allGood = false;
                    console.error('ERROR: Bad Name form');
                    break;
                }
```

\*\*Trecias pavyzdys kai sukuriamas Validacijos pasirinkimu objektas:

```js
this.validations = {
            email: this.isValidEmail,
            name: this.isValidName,
            text: this.isValidText,
        };

const validationRule = element.dataset.validation;
const value = element.value;

if (!this.validations[validationRule](value)) {
                    allGood = false;
                    break;
                }
```
