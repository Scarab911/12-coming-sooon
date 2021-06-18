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
