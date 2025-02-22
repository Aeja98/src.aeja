# DT211G-Moment 1 - Automatisering & publicering 

## Git & Github:
Filer som inte ska versionhanteras ska finnas med i en .gitignore-fil. Det är exempelvis "node_modules"-katalogen.

Arbeta med branches i Git, exempelvis "dev", "main" / "prod" eller liknande. Och tänk på att detta repo enkelt ska kunna klonas ner och användas för nya kommande projekt.


## Automatisering och publicering:
Skapa webbsida med HTML, CSS och JavaScript
Ska innehålla bilder
Ska använda NodeJs för att automatisera uppgifterna

### De uppgifter som skall automatiskeras är:

- Minifiering av CSS. (Vi kommer även använda transpilering av SCSS/SASS till CSS i senare moment i kursen)  
- Transpilering och minifiering av JavaScript.  
- Minifiering av HTML.  
- Optimering av bilder - skall ske automatiskt vid uppdatering av bilder. Använd moderna bildformat (exempelvis WebP eller AVIF) och passande inställningar för dessa.  
- Bakåtkompabilitet i genererade filer, så att exempelvis JavaScript transpileras så att dessa fungerar i så många webbläsare som möjligt.  
- Kopiering av arbetsfiler till mapp för publicering med optimerade filer.  

## Skapa demowebbplats:
Sidan ska innehålla huvudmeny
Sidan ska bestå av minst 3 undersidor:
- Startsida
- Bild sida (minst 5 foton)
- Undersida för publicering: beskriver skapande arbetsprocess

Sidorna ska vara responsiv
Det ska finnas skiljd filstruktur mellan arbetsfiler och publiceringsfiler.

## Publicering:
Du skall publicera webbplatsen till en webbhost som ej är baserad på FTP/SFTP. Det är inte godkänt att publicera till studenter.miun.se.

Webbplatsens ska publiceras automatiskt vid uppdatering av webbplatsen i Github-repot.

Du kan välja publiceringshost på egen hand, som exempelvis Netlify, Render, Vercel, Github Pages eller annan (prova med fördel olika).


**Tips:** här är det lämpligt att arbeta med "branches" i Git, så att du kan ha en branch för utveckling och en för publicering. 
Exempelvis en "development"-branch som du använder under utveckling och testning, och en "main"-branch som du använder för publicering. 
På så vis slipper du ha ofärdiga webbplatser publicerade.


## Beskriv din arbetsprocess:
Skapa en undersida i webbplatsen där du i detalj beskriver hur din arbetsprocess för utveckling och publicering fungerar.

Beskriv vad som är automatiserat och vilka verktyg du använt för detta.
