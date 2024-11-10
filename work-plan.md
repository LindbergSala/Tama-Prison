1. Steg-för-steg arbetsplan

Steg 0: Starta programet.
Alla JavaScript funktioner ska vara avstängda fram tills dess att spelaren trycker på on knappen, förutom en funktion. Allt på <div class="game__screen"> ska vara dolt. När spelaren tryckt på <button class="button__on">ON</button> så ska allt på <div class="game__screen"> tona fram och spelet ska vara igång. Om spelaren trycker på <button class="button__off">OFF</button> så ska allt på <div class="game__screen"> tona bort och inte synas igen. 

Steg 1: Designa husdjuret med HTML och CSS
Se till att koppla samman så att <div class="main-character"> fungerar som spelets "karaktär".
När spelaren inte gör något aktivt med "karaktär" så ska denna vandra runt idelt fram och tillbaka på dom utsatta "X" markeringarna i min gridlayout. 

    "bed  x bookcase . ."
    "bed x . . x"
    ". x m-c x x"
    ". table table . ."
    ". . . s-b s-b";

Steg 2: Lägg till interaktionsknappar
För att mata "karaktär" (<button class="button__num-7">Num-7</button>) vilket leder till att "karaktär" Hunger fylls på.
För att leka "karaktär" (<button class="button__num-8">Num-8</button>)
vilket leder till att "karaktär" Glädje fylls på.
För att "karaktär" ska sova (<button class="button__num-9">Num-9</button>)
vilket leder till att "karaktär" Energi fylls på.
Varje knapp ska alltså trigga en specifik händelse och uppdatera djurets status.


Steg 3: Implementera statusindikatorer
Variabler för att hålla reda på "karaktär" status:
Hunger (<label>MAT</label>)
Glädje (<label>GLÄDJE</label>)
Energi (<label>ENERGI</label>)
Varje knappklick ska öka status för respektive område (mata = mindre hunger, leka = mer glädje, sova = mer energi).
Visa dessa statusindikatorer visuellt med (<div class="status-bar">) och (<div class="meter">).

Steg 3.1 Positioner för statusförbättringar.

När spelaren valt att trycka på någon av förljande (<button class="button__num-7">Num-7</button>), (<button class="button__num-8">Num-8</button>) eller (<button class="button__num-9">Num-9</button>) så ska "karaktär" gå till det utvalda området ocg få den valda status effekten.

(<button class="button__num-7">Num-7</button>) får karaktären att gå till "X" och vilket leder till att "karaktär" Hunger fylls på

    "bed  . bookcase . ."
    "bed . . . ."
    ". X m-c . ."
    ". table table . ."
    ". . . s-b s-b";

(<button class="button__num-8">Num-8</button>) får karaktären att gå till något av dom utsatta "X" och ställer sig där. Efter att seplaren har klickat på "karaktär" så flyttar den sig till ett av dom andra "X", när detta upprepats 3 gånger så ställer sig "karaktär" på sin vanliga plats och hans Glädje fylls på.

    "bed  X bookcase X X"
    "bed X X X X"
    "X  m-c X X"
    "X table table X X"
    "X X X s-b s-b"

(<button class="button__num-9">Num-9</button>) får karaktären att gå till "bed"
vilket leder till att "karaktär" Energi fylls på.


Steg 4: Tidsbaserade händelser
Använd setInterval eller setTimeout för att göra "karaktär" hungrigare, tröttare och mindre glatt över tid.
Bestäm hur snabbt statusen ska förändras med tiden och justera för att det ska vara balanserat.

Steg 5: Ändra utseende baserat på status
Koppla färg och utseendeförändringar till "karaktär" hälsa. Ju lägre "karaktär" nivåer är i den <div class="status-bar"> ju mer kändras "karaktär" färg i
<div class="main-character__l-hand"></div>, <div class="main-character__head"></div> och <div class="main-character__r-hand"></div> ifrån deras orginal färg #ffc0cb; till #fd1f44 för att visa spelaren att "karaktär" hälsotillstånd är kritiskt lågt.

Steg 6: Händelser vid kritisk status
"karaktär" ska rymma om "karaktär" alla statusar når 0. Då ska det poppa fram ett medelande på skärmen med texten "Rymningsförsök!" När den texten har dykt upp över skärmen så ska <div class="main-character"> inte längre va synlig. Tillsammans med texten "Rymningsförsök!" Så ska spelaren få 2 alternativ i form av tvp knappar "Fånga in rymmlingen" och "Befria rymmlingen"

Om spelaren väljer "Fånga in rymmlingen" Så ska spelet nollställas helt och börja om.

Om spelaren väljer "Befria rymmlingen" så ska en ruta med information om spelets gång dyka upp. Den ska visa hur många gånger spelaren tryckt på             <button class="button__num-7">Num-7</button>
<button class="button__num-8">Num-8</button>
<button class="button__num-9">Num-9</button>
för att hålla "karaktär" nöjd. Programmet ska även använda sig av "Steg 4 Tidsbaserade händelser" för att tala om för spelaren hur många sekunder spelet pågått fram tills "Befria rymmlingen". Tillsammans med all ovanstånde information visats för spelaren så ska en knapp med "AVSLUTA" komma upp, den komma up och programmet ska stängas av, precis som spelaren valt att trycka på <button class="button__off">OFF</button>.

Steg 7: Spara data i Local Storage
Använd Local Storage för att spara husdjurets status.
Spara statusen när sidan stängs, så att husdjuret har samma status nästa gång spelet öppnas.



Steg 8 (valfritt)
Tidens påverkan även när spelet är stängt
Använd Date.now() för att beräkna hur mycket tid som gått sedan spelet senast spelades.
Anpassa hunger, energi och glädje baserat på denna tidsberäkning.
Lägg till ett ekonomisystem
Lägg till en funktion för att tjäna pengar, t.ex. genom att skicka djuret på äventyr.
Skapa en valuta för spelet så att djuret kan köpa mat eller leksaker.
Tekniker att använda
Variabler & datatyper för att hålla reda på status.
Conditionals för att bestämma vad som händer när status är låga.
Loopar och funktioner för interaktiva och tidsbaserade förändringar.
DOM-manipulation och eventhantering för att uppdatera status på sidan.
Local Storage för att spara och ladda husdjurets status.
setInterval och setTimeout för att hantera tidsbaserade händelser.



Arbetsplanens struktur
Planera och skissa ut designen och spelreglerna.
Skapa grundläggande HTML och CSS för husdjuret och statusindikatorerna.
Implementera interaktion och statusuppdatering genom JavaScript-knappar.
Använd Local Storage för att spara data mellan sessioner.
Lägg till tidsbaserade händelser och extra funktioner om det finns tid.
