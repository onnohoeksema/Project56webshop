using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Angular_webshop.Controllers
{
    [Route("api/[controller]")]
    public class DiceCustomizerController : Controller
    {
        private readonly DatabaseModel _context;

        public DiceCustomizerController(DatabaseModel context)
        {
            _context = context;
        }


        [HttpGet ("GetDiceTypes")]
        public IActionResult GetDiceTypes()
        {
            var dcdicetypes = from p in _context.DiceType
                
                select p.dcdicetypeName;

            foreach (var dcdicetype in dcdicetypes)
            {
                Console.WriteLine("{0}",dcdicetypes);
            }
                return Ok(dcdicetypes);
        }

        [HttpGet ("GetDiceColor")]
        public IActionResult GetDiceColor()
        {
            var dcdicecolors = from p in _context.DiceColor
                
                select p.dcdicecolorName;

            foreach (var dcdicecolor in dcdicecolors)
            {
                Console.WriteLine("{0}",dcdicecolors);
            }
                return Ok(dcdicecolors);
        }

        [HttpGet ("GetNumberColor")]
        public IActionResult GetNumberColor()
        {
            var dcnumbercolors = from p in _context.NumberColor
                
                select p.dcnumbercolorName;

            foreach (var numbercolor in dcnumbercolors)
            {
                Console.WriteLine("{0}",dcnumbercolors);
            }
                return Ok(dcnumbercolors);
        }

        [HttpGet ("GetDicePattern")]
        public IActionResult GetDicePattern()
        {
            var dcdicepatterns = from p in _context.DicePattern
                
                select p.dcdicepatternName;

            foreach (var dicepattern in dcdicepatterns)
            {
                Console.WriteLine("{0}",dcdicepatterns);
            }
                return Ok(dcdicepatterns);
        }
    }
}