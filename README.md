# Task Senaryosu

### Baslangic

- Projeyi forklayabilir / veya zipini indirip git dosyasını sildikten sonra kendi hesabınızda <b>private</b> repo olarak yükleyebilirsiniz.
- proje ana dizininde asagidaki komutlari calistirin

  ```sh
  yarn install
  ```

  ```sh
  yarn start
  ```

</br>
<b>Önemli Not:</b> Projenin zipini aldıysanız kendi projenize attığınız ilk commit projede hiçbir değişiklik yapılmamış hali olmalı.

</br></br>

### 1. Görev Amacı

- Adayın aşağıdaki teknolojilere olan yetkinliğini gözlemlemek adına oluşturulmustur:
  - React yetkinliği
  - Styling bilgisi
  - Git kullanımı

</br></br>

### 2. Görev Tanımı

#### a. Git

- Görevde proje kullanılacak teknolojilerin kurulumunun sağlandığı kod adayın görevi onaylaması ile Github üzerinden iletilecektir. Bunun dışında aday kendi proje başlangıcını yapması da uygun görülmektedir. Örneğin proje Next.js altyapısı ile yapılabilir.

- Aday paylaşılan görevin kodunu kullanmakta olduğu Github/Gitlab hesabında Private bir repository açarak kodun paylaşılmış ilk halini ‘First Commit’ olarak yüklemesi beklenmektedir.

- Projeye, ad ve soyadının baş harfleriyle branch açarak çalışmasını bu branch te yapması (örnek: Bill Gates -> BG-branch)

- Görev bitirildiğinde

  1. Görevin branch e yüklenmesi
  2. Branch in Master branch ine merge işleminin gerçekleştirilmesi
  3. Görevin aşağıdaki hesaplar ile paylaşılması

  - Github ise
    - baris-karan
    - muhammeddeniz
  - Gitlab ise
    - bariskaran
    - muhammeddeniz

  4. Görevin tamamlandığına dair cevap maili hazırlanması beklenmektedir.

- Master branch ine merge işleminin yapıldığı ve atılan cevap mailinin tarihi dikkate alınacaktır.

</br></br>

#### b. Görev

##### Görev tanımı:

1. İsmi girilen kullanıcının github profil bilgisi ve altinda sahip olduğu github repository lerinin listelenmesi beklenmektedir.

2. Profile bilgisi getirmek için kullanılabilecek servis:

GET:

```sh
https://api.github.com/users/{githubUserName}
```

<br/>

3. Profile ait repolari getirmek için kullanılabilecek servis:

GET:

```sh
https://api.github.com/users/{githubUserName}/repos
```

<br/>

##### Kullanıcının profil bilgisi olarak aşağıdaki bilgilerin gösterilmesi beklenmektedir

- name
- location
- company
- avatar_url
- public_repos
- followers
- following

<br/>

##### İsmi girilen github kullanicisinin public repositorylerinin ‘created_at’ degerine gore listelenmesi

<br/>

##### Listelenen repository kart larinda bulunmasi gereken bilgiler

1. Repository ismi
2. Repository oluşturulma zamanı
3. Repository url bilgisi

- repository ismine koyularak tıklandığında url yönlenmesinin sağlanması

4. Repository dili
5. Favori butonu

<br/>

#### Her bir repository nin sağ üstünde yıldız ikonuna basıldığında favoriye eklenebilir olması

- favoriye eklenmis bir repositoryde favoriye eklendigi icon olarak degismesi beklenmektedir.

#### Favoriye eklenmiş repository nin yildiz icon una basıldığında favorilerden silinmesi

- Favoriden çıkarılmış bir repository icon un başlangıç haline geri dönmesi beklenmektedir

#### Sayfanın sağ üstünde bulunan favori repolar butonuna basıldığında

- Favori olan kaydedilmiş repository lerin listelenmesi beklenmektedir.

#### vercel deploy edilmesi

- Bonus

<br /><br />

### 3. Görevde kullanılması uygun görülen teknolojiler

- Redux ( setupi starterkit ile geliyor zaten )
- Redux bağlantısı React Hooklar ile yapılması (orn: useSelector, useDispatch)
- Stillendirme icin hazir kutuphane kullanılabilir (orn: chakraui, bootstrap, scss, css)
- Axios HTTP service istekleri için kullanılabilir.
- React router dom Sayfa yonlendirmeleri icin kullanilmali.
- react-vertical-timeline-component ile zaman dilimine gore sortlanmasi (repolar listelenirken kullanilabilir)

<br/></br>

### 4. Kodlarken Nelere Dikkat Etmeli?

- Functional component (onemli)
- Clean Code
- Commitlerin duzenli olmasi
- İstenilen görevin fonksiyonelliğinin karşılanması.

<br/></br>

<b>BAŞARILAR...</b>
</br>

## License

MIT © [DogGO](https://github.com/doggo-frontend)
