1. Repeat and check homework
2. Identify TS/TC for smoke test
3. Defects and severities
4. Bug lifecycle

## 2. Identify TS/TC for smoke test

Smoke TC for web site:   
https://www.autobusubilietai.lt/

TC.1. Registracija  
TC.2. Prisijungimas  
TC.3. Keliones paieska (keliones pasirinkimas)
      nors galima iskaidyti i 2 dalis:
      kelione i 1a puse ir keline i abi puses
TC.4. Pirkimas (duomenu pateikimas)  
TC.5. Apmokejimas (mokejimo pasirinkimas)  
TC.6. Atsijungimas  
TC.7. Issiregistravimas  
TC.8. UI/UX defektai (tai nera privolomai, kaip papildomas punktas)  

Smoke TC of mobile app: 
install app `autobusu bilietai`

simulate and emulate

Smoke TC for mobile app: 

TC.1. APP idiegimas  
TC.2. Registracija  
TC.3. Prisijungimas  
TC.4. Keliones paieska (keliones pasirinkimas)  
* nors galima iskaidyti i 2 dalis:
* kelione i 1a puse ir keline i abi puses  

TC.5. Pirkimas (duomenu pateikimas)  
TC.6. Apmokejimas (mokejimo pasirinkimas)  
TC.7. Atsijungimas  
TC.8. Issiregistravimas  
TC.9. UI/UX defektai (tai nera privolomai, kaip papildomas punktas)  
TC.10. APP isdiegimas  

## 3. Defects and severities
ISQTB  
https://astqb.org/  
https://www.istqb.org/  

Keletas poziurio taksu:
1. programuotojas
2. testuotojas
3. PO - project owner
4. klientas

Workaround -> funkcionalumo apejimas

Severities:

### Critical
Kritinis defektas, dėl kurio neįmanoma tęsti testavimo ar naudoti sistemos.   
Pvz.: programa nulūžta iškart paleidus, nėra galimybės prisijungti prie sistemos.  
Viena iš pagrindinių funkcijų neveikia. Neturi "workaround".  
Visa kas susije su saugumu, nuluzimais (crashes), duomenu praradimai ir pan.
Dazniausiai susije su funkciniais testais, pagrindinemis funkcijomis.
Aptinkama atliekant smoke, regression testus.  
Klaidos gaunamos atliekant pozityvius testus.

### High
Didelės įtakos turintis defektas, kuris daro didelę žalą sistemai, bet gali būti tam tikri būdai jį apeiti.  
Pvz.: duomenų praradimas, sisteminiai klaidingi skaičiavimai.   
Susije su pagrindinemis funkcijomis, workaround vartotojas atlikti pats negali.   
Dazniausiai susije su funkciniais testais, pagrindinemis funkcijomis.  
Klaidos gaunamos atliekant pozityvius testus. 

### Medium
Svarbus defektas, kuris daro pastebimą įtaką sistemos funkcionalumui, bet vis dar įmanoma naudotis sistema.  
Pvz.: neveikiantis konkretus funkcionalumas, neteisingai pateikiami duomenys.  
Dazniausiai susijes su salutinemis funkcijomis, workaround lengvai atlieka pats vartotojas, klaidos gaunamos is negatyviu testu, UI/UX klaidos.  

### Low
Daro minimalią įtaką sistemos veikimui arba neturi jokios įtakos funkcionalumui, bet gali būti vizualinė ar kosmetinė klaida.  
Pvz.: nedideli UI neatitikimai, neteisingas pranešimų formatavimas, ašybos klaida, mygtuko išdėstymo neatitikimas ir pan.


## 4. Bug lifecycle
![](/pictures/bug_lifecycle.png)

## 6. Jira
https://home.atlassian.com/  
