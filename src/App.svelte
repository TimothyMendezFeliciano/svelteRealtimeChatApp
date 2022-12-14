<script>
    import {auth, googleProvider} from './firebase'
    import {authState} from 'rxfire/auth'

    let user;

    const unsubscribe = authState(auth).subscribe(usr => user = usr)

    function login() {
        auth.signInWithPopup(googleProvider)
    }

    function logout() {
        auth.signOut()
    }
</script>

<style>
    main {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        max-width: 400px;
        max-height: 500px;
        background: blue;
        border: 1px solid #eee;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    }

    .login-form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login-form button {
        padding: 10px;
        background: #fff;
        color: orange;
        font-size: 16px;
        cursor: pointer;
        outline: none;
        border: 1px solid #bbb;
    }

    .login-form button i.fa {
        padding-right: 10px;
        border-right: 1px solid #ddd;
        color: black;
    }
</style>

<main>
    {#if user}
        Logged in as {user.uid}
    {:else }
        <div class="login-form">
            <button on:click={login}>
                <i class="fa fa-google"></i>
                Sign In With Google
            </button>
        </div>
    {/if}
</main>
