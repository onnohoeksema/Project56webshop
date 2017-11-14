using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_webshop.Models
{
    public class DiceCustomizerModel
    {
        //Oke, wat we hier dus willen is dat er data opgevraagd word met alle opties voor onze customizer. Voor nu zal ik even een paar arrays aanmaken

        public string[] DiceType = new string[] { "D4", "D6", "D8", "D10", "D12", "D20" };
        public string[] DiceColor = new string[] { "Red", "Green", "Blue", "Orange", "White"};
        public string[] NumberColor = new string[] { "Red", "Green", "Blue", "Black", "Pink" };
        public string[] DicePattern = new string[] { "Gucci", "Panther", "None" };
        
        
       //Wat is nu de bedoeling: Uiteindelijk moeten deze arrays op het scherm komen te staan met allemaal verschillende keuzes. Laten we nu eerst beginnen met het laten zien van de opties
       //Daarna is het misschien wel handig om te kijken of we in het scherm nog extra kunnen laten laten zien wat er gekozen is. Kiest de klant bijvoorbeeld een groene D4, dat er dan ook een tekstvak 
       //op het scherm komt met die specifieke keuzes. Als we dat voor elkaar hebben, dan kunnen we daar uiteindelijk ook weer afbeeldingen ofzo aan koppelen
    }
}