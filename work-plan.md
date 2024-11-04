1. Projektuppstart och grundstruktur
Uppgift: Skapa ett virtuellt husdjur som kan matas, lekas med och sova.
Presentation: Fokus på resultatet snarare än koden.
Deadline: Presentation på fredag.

2. Planeringsfaser
Val av arbetssätt: Individuellt, i grupp, eller med en ny grupp.
Koncept: Bestäm husdjurets design (t.ex., enkel fyrkant eller rund blob).
Beslut kring utseendeförändring: Färgändringar baserat på status (grön -> gul -> röd).

3. Steg-för-steg arbetsplan

Steg 1: Designa husdjuret med HTML och CSS
Skapa en enkel figur för husdjuret (t.ex. en rund eller fyrkantig blob).
Lägg till grundläggande stil med CSS för att husdjuret ska se roligt ut.
Planera för färgändringar baserade på status (hälsa/humör).

Steg 2: Lägg till interaktionsknappar
Knappar för att:
Mata djuret
Leka med djuret
Sova
Varje knapp ska trigga en specifik händelse och uppdatera djurets status.
Steg 3: Implementera statusindikatorer
Variabler för att hålla reda på husdjurets status:
Hunger
Glädje
Energi
Varje knappklick ska öka status för respektive område (mata = mindre hunger, leka = mer glädje, sova = mer energi).
Visa dessa statusindikatorer visuellt (t.ex. staplar eller procent).

Steg 4: Tidsbaserade händelser
Använd setInterval eller setTimeout för att göra husdjuret hungrigare, tröttare och mindre glatt över tid.
Bestäm hur snabbt statusen ska förändras med tiden och justera för att det ska vara balanserat.

Steg 5: Ändra utseende baserat på status
Koppla färg eller utseendeförändringar till husdjurets hälsa:
Grön = nöjd, Gul = neutral, Röd = missnöjd.
Implementera CSS-ändringar som påverkar färgen på husdjuret beroende på dess status.

Steg 6: Händelser vid kritisk status
Bestäm spelregler när någon status når 0:
Djuret kan ”dö”, rymma, eller visa en annan händelse.
Skapa funktioner som triggar en visuell eller textbaserad respons vid 0 i status.

Steg 7: Spara data i Local Storage
Använd Local Storage för att spara husdjurets status.
Spara statusen när sidan stängs, så att husdjuret har samma status nästa gång spelet öppnas.
Extra Funktioner (valfritt)
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
