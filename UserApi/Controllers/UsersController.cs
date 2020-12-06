
using System;
using System.Threading.Tasks;
using UserApi.Filters;
using UserApi.Models;
using UserApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace UserApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly UserService _userService;

        public UsersController(ILogger<UsersController> logger, UserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] UserFilter filter) {
            try {
                var result = _userService.Get(filter);
                if (result == null) {
                    return NotFound();
                }

                return Ok(result);
            } catch (Exception ex) {
                _logger.LogError(ex, "Error caught in UserController: Get");
                return StatusCode(500);
            }
        }
            
        [HttpPost]
        public IActionResult Post([FromBody] User user) {
            try {
                return Ok(_userService.Insert(user));
            } catch(Exception ex) {
                _logger.LogError(ex, "Error caught in UserController: Post");
                return StatusCode(500);
            }
        } 

        [HttpPut]
        public async Task<IActionResult> Update(User user) {
            try {
                var result = await _userService.Update(user);

                if (result == null) {
                    return NotFound();
                }
                return Ok(user);
            } catch (Exception ex) {
                _logger.LogError(ex, "Error caught in UserController: Update");
                return StatusCode(500);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(string id) {
            try {
                var result = _userService.Get(id);
                if (result == null) {
                    return NotFound();
                }
                return Ok(result);
            } catch (Exception ex) {
                _logger.LogError(ex, $"Exception caught in UserController:Get/{id}");
                return StatusCode(500);
            }
        } 

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(string id) {
            try {
                var success =_userService.Delete(id);
                if (!success) {
                    return NotFound();
                }
                return Ok();
            } catch (Exception ex) {
                _logger.LogError(ex, $"Exception caught in UserController:Delete/{id}");
                return StatusCode(500);
            }
        }
    }
}
