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


        [HttpGet ("GetdcDiceTypes")]
        public IActionResult GetdcDiceTypes()
        {
            var dcdicetypes = from p in _context.dcDiceType
                
                select p.dcdicetypeName;

            foreach (var dcdicetype in dcdicetypes)
            {
                Console.WriteLine("{0}",dcdicetypes);
            }
                return Ok(dcdicetypes);
        }

        [HttpGet ("GetdcDiceColors")]
        public IActionResult GetdcDiceColors()
        {
            var dcdicecolors = from p in _context.dcDiceColor
                
                select p.dcdicecolorName;

            foreach (var dcdicecolor in dcdicecolors)
            {
                Console.WriteLine("{0}",dcdicecolors);
            }
                return Ok(dcdicecolors);
        }

        [HttpGet ("GetdcNumberColors")]
        public IActionResult GetdcNumberColors()
        {
            var dcnumbercolors = from p in _context.dcNumberColor
                
                select p.dcnumbercolorName;

            foreach (var dcnumbercolor in dcnumbercolors)
            {
                Console.WriteLine("{0}",dcnumbercolors);
            }
                return Ok(dcnumbercolors);
        }

        [HttpGet ("GetdcDicePatterns")]
        public IActionResult GetdcDicePatterns()
        {
            var dcdicepatterns = from p in _context.dcDicePattern
                
                select p.dcdicepatternName;

            foreach (var dcdicepattern in dcdicepatterns)
            {
                Console.WriteLine("{0}",dcdicepatterns);
            }
                return Ok(dcdicepatterns);
        }
    }
}