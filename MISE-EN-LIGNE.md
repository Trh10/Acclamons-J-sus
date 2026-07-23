# Mise en ligne officielle — Acclamons Jésus 2026

Guide de préparation pour le lancement public du site.

## État actuel

| Élément | Statut |
|---------|--------|
| Site Next.js (export statique) | Prêt |
| URL provisoire GitHub Pages | https://trh10.github.io/Acclamons-J-sus/ |
| Déploiement automatique (GitHub Actions) | Bloqué (facturation GitHub) |
| Déploiement manuel (`gh-pages`) | Fonctionnel |
| Spot vidéo 2026 | Intégré (`/videos/spot-acclamons-jesus-2026.mp4`) |

---

## Checklist avant lancement officiel

### Contenu
- [ ] Vérifier dates, lieu et programme (28–30 août 2026, Centre Culturel Grand Tambour)
- [ ] Confirmer la liste des artistes et leurs photos
- [ ] Tester la page billetterie : `/commande.html`
- [ ] Relire textes (manifeste, solidarité, témoignages)
- [ ] Vérifier le spot vidéo (son, qualité, affichage mobile)

### Technique
- [ ] Build de production sans erreur
- [ ] Toutes les images et la vidéo se chargent en ligne
- [ ] Navigation et ancres (`#spot`, `#gallery`, etc.) fonctionnent
- [ ] Favicon et métadonnées Open Graph corrects
- [ ] Test sur mobile (iPhone + Android)

### Domaine officiel (recommandé)
- [ ] Acheter/configurer le nom de domaine (ex. `acclamonsjesus.org`)
- [ ] Configurer DNS vers GitHub Pages ou hébergeur choisi
- [ ] Activer HTTPS
- [ ] Mettre à jour `NEXT_PUBLIC_BASE_PATH` si changement d’URL

---

## Domaine officiel : acclamonsjesus.com

### 1. DNS Namecheap (Advanced DNS)

Supprimez d'abord les enregistrements actuels :
- CNAME `www` → `parkingpage.namecheap.com`
- Redirection URL `@` → `www.acclamonsjesus.com`

Puis ajoutez :

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **A** | `@` | `185.199.108.153` | Automatic |
| **A** | `@` | `185.199.109.153` | Automatic |
| **A** | `@` | `185.199.110.153` | Automatic |
| **A** | `@` | `185.199.111.153` | Automatic |
| **CNAME** | `www` | `trh10.github.io.` | Automatic |

> Le point final dans `trh10.github.io.` est optionnel sur Namecheap.

### 2. GitHub Pages — domaine personnalisé

1. Repo : https://github.com/Trh10/Acclamons-J-sus
2. **Settings → Pages → Custom domain**
3. Saisir : `acclamonsjesus.com`
4. Cocher **Enforce HTTPS** (disponible après propagation DNS, ~15 min à 24 h)

### 3. Déployer le site sur le domaine

```powershell
npm run deploy:domain
```

Ce script build **sans** le chemin `/Acclamons-J-sus` et publie avec le fichier `CNAME`.

### 4. Vérification

- https://acclamonsjesus.com
- https://www.acclamonsjesus.com (doit rediriger vers le domaine apex si configuré sur GitHub)

---

## Déploiement sur GitHub Pages (URL provisoire)

### Build + déploiement manuel (PowerShell)

```powershell
cd "c:\Users\terac\Documents\divine_gospel_festival"
.\scripts\deploy-pages.ps1
```

Ou manuellement :

```powershell
$env:GITHUB_PAGES = 'true'
$env:NEXT_PUBLIC_BASE_PATH = '/Acclamons-J-sus'
npm run build
npx gh-pages -d out -b gh-pages -f -m "Lancement officiel Acclamons Jésus 2026"
```

Attendre 1 à 3 minutes que GitHub Pages termine le déploiement, puis vérifier :
https://trh10.github.io/Acclamons-J-sus/

### Débloquer le déploiement automatique

1. Aller sur GitHub → **Settings → Billing** du compte `trh10`
2. Régler le problème de facturation
3. Le workflow `.github/workflows/deploy.yml` prendra le relais à chaque push sur `main`

---

## Passer à un domaine officiel

### Option A — GitHub Pages + domaine personnalisé

1. Dans le repo GitHub : **Settings → Pages → Custom domain**
2. Saisir le domaine (ex. `www.acclamonsjesus.org`)
3. Chez le registrar, ajouter les enregistrements DNS :
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - ou `CNAME` `www` → `trh10.github.io`
4. Modifier `next.config.js` : si le site est à la **racine** du domaine, retirer `basePath` pour la prod officielle :

```js
const isGhPages = process.env.GITHUB_PAGES === 'true'
// Pour domaine racine officiel : GITHUB_PAGES=false, basePath vide
```

5. Rebuild et redéployer.

### Option B — Vercel / Netlify (recommandé pour un domaine pro)

- Connexion au repo GitHub
- Framework : Next.js
- Build : `npm run build` (sans `GITHUB_PAGES`)
- Output : dossier `out`
- Domaine personnalisé géré automatiquement (HTTPS inclus)

---

## Fichiers volumineux

| Fichier | Taille approx. | Note |
|---------|----------------|------|
| `public/videos/spot-acclamons-jesus-2026.mp4` | ~34 Mo | Compressé depuis 134 Mo (4K) |
| `public/hero-video.mp4` | ~15 Mo | Fond hero |

Le fichier source 4K (`Downloads/…`) ne doit **pas** être versionné dans Git. Conserver l’original en local pour d’éventuelles ré-encodes.

---

## Vérification post-déploiement

```powershell
# Spot et galerie présents
node -e "fetch('https://trh10.github.io/Acclamons-J-sus/index.html').then(r=>r.text()).then(t=>console.log('spot',t.includes('spot-acclamons-jesus-2026'),'gallery',t.includes('edition-2017-poster')));"

# Vidéo accessible
node -e "fetch('https://trh10.github.io/Acclamons-J-sus/videos/spot-acclamons-jesus-2026.mp4',{method:'HEAD'}).then(r=>console.log('video',r.status,r.headers.get('content-length')));"
```

Rafraîchissement forcé navigateur : **Ctrl + Shift + R**

---

## Contact & billetterie

- Page commande : `public/commande.html`
- Footer : section `#contact`

---

*Dernière mise à jour : juillet 2026 — 5e édition Acclamons Jésus pour la Paix*
