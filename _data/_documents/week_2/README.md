# Hafta 2

**Amaç :** Geçtiğimiz hafta öğrendiklerimizi pekiştirmek ve CSS ile ilgili yeni bilgiler öğrenmek.

**Yazarlar :** [**hazalsilayaprak**](https://github.com/hazalsilayaprak) **&&** [**aykutsahinler**](https://github.com/aykutsahinler)

---

## Uygulama
Aşağıda bu hafta yaptığımız uygulamanın kodlarını göreceksiniz.


### `<html>`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>hafta-2</title>
    <link rel="stylesheet" href="hafta-2.css">
  </head>
  <body>
    <nav class="navbar">
      <img class="logo" src="http://limeshot.com/images/blog/chanel-logo.png" alt="">
      <div class="navbar-items">Homepage</div>
      <div class="navbar-items">About</div>
      <div class="navbar-items">Credits</div>
      <div class="navbar-items">Log-out</div>
    </nav>

    <main class="container">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </main>

  </body>
</html>
```

### CSS

```CSS
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  box-shadow: 0 10px 10px -10px grey;
  position: fixed;
  z-index: 2;
  background-color: white;
}

.logo{
  height: 100px;
  cursor: pointer;
}

.navbar-items{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inconsolata', monospace;
  font-size: 25px;
  cursor: pointer;
  width: 100%;
  height: 100px;
  transition: all .2s linear;
}

.navbar-items:hover{
  background-color: #333641;
  font-weight: bold;
  border-bottom: 5px solid indianred;
  color: white;
}

.container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
}

.card{
  width: 50%;
  height: 600px;
  background: url(https://picsum.photos/600/600);
  background-size: cover;
  background-position: center;
  transition: all .3s linear;
  filter: grayscale(100%) blur(5px);
  cursor: pointer;
}

.card:hover{
  filter: grayscale(0%) blur(0px);
}

```



---

## Bu hafta neler yaptık ?
CSS ile ilgili yeni şeyler öğrendik.

HTML ile ilgili bilgilerimizi pekiştirdik.

**Haftaya Görüşmek Üzere!**
