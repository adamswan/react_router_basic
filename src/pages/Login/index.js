import {Link, useNavigate} from 'react-router-dom'

function Login() {
    let navigate = useNavigate()

    return (
        <div>
            <h1>Login</h1>

            <div>
                <span>声明式导航</span>
                <Link to='/article'>去文章页</Link>
            </div>

            <div>
                <span>编程式导航</span>
                <br />
                <button onClick={() => navigate('/article')}>去文章页（不传参</button>
                <br />
                {/* SearchParams 传参 */}
                <button onClick={() => navigate('/article?name=jim&age=18')}>去文章页（searchParams传参）</button>
                <br />
                  {/* Params 传参 */}
                <button onClick={() => navigate('/article/188')}>去文章页（params传参）</button>
            </div>
        </div>
    )
}

export default Login