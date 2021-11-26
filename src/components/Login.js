

function Login() {
  return (
    <div>
          <form  onsubmit="return false;" id="login" class="user">
                        
                        <div class="form-group">
                            <input type="text" name="email" class="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                        <input type="password" name="password" class="form-control" id="password" placeholder="Password"/>
                        </div>
                        <input type="submit"  id="save" value="Login" onclick="LoginAuthSetup();" class="btn btn-primary btn-block"/>
      </form>
    </div>
  );
}

export default Login;
