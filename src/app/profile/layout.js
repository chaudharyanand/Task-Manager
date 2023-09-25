export default function ProfileLayou({ children}){
    return(
        <div>
            <h1>This is Profile Header</h1>
            {children}
            <h1>This is profile footer</h1>
        </div>
    );
}