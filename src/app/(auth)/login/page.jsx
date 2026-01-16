import LoginForm from "@/components/form/LoginForm";


const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md bg-base-200 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-base-content text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-base-content/60 text-center mt-1">
          Please sign in to your account
        </p>

        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
export default LoginPage;
