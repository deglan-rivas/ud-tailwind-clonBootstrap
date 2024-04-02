const PL2 = () => {
  // playground de tailwind: tailwind play online
  /***
   * https://play.tailwindcss.com/LcypgqHZQO
   * https://play.tailwindcss.com/iFNadX9DGq este es porque regeneré el link xD
   * <div class="bg-gradient-to-br from-violet-500 to-red-500 h-screen flex flex-col">
      
        <div class="h-1/3 flex justify-center items-center">
          <div class="bg-[url('https://avatars.githubusercontent.com/u/104169667?v=4')] bg-cover bg-center bg-blue-400 bg-blend-overlay h-full w-1/2">

          </div>
        </div>
        <div class="text-center text-white h-2/3">
          <p class="text-2xl font-medium">
            Deglan Rivas
          </p>
          <p class="text-xl mb-2 uppercase">
            FullStack Developer
          </p>
          <p class="mb-2 px-2 w-1/4 border-b border-b-white mx-auto">

          </p>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, animi a quae odit voluptas quasi minima amet repellat suscipit et excepturi similique dicta ad pariatur doloremque enim perspiciatis, molestias adipisci?
          </p>
          <div>
            <button class="text-violet-500 bg-yellow-400 w-full">
              Get in touch
            </button>
          </div>
        </div>
      
    </div>
   */

  return (
    <>
      <div className="bg-gradient-to-br from-violet-500 to-red-500 h-screen flex flex-col">
        <div className="basis-1/3 flex justify-center items-center p-2">
          <div className="bg-[url('https://avatars.githubusercontent.com/u/104169667?v=4')] bg-cover bg-center bg-blue-400 bg-blend-overlay w-1/2 h-[100%] border border-white  rounded-lg">

          </div>
        </div>
        <div className="text-center text-white mb-2">
          <p className="text-2xl font-medium">
            Deglan Rivas
          </p>
          <p className="text-xl mb-2 uppercase">
            FullStack Developer
          </p>
          <p className="mb-2 px-2 w-1/4 border-b border-b-white mx-auto">

          </p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, animi a quae odit voluptas quasi minima amet repellat suscipit et excepturi similique dicta ad pariatur doloremque enim perspiciatis, molestias adipisci?
          </p>
          <div>
            <button className="text-violet-500 bg-yellow-400 w-full">
              Get in touch
            </button>
          </div>
        </div>
        <ul className="text-yellow-500 px-2">
          <li>primero entendimos que no funcaba</li>
          <li>nos fuimos a tailwind playgorund online para probarlo</li>
          <li>ahí sí funcaba obvio si no hay contenido hay que darle medidas, pero el h-1/3 sí funcaba</li>
          <li>en nuestro local traté de mover el id="root" del main div al body y no funcó</li>
          <li>personalicé con h-[100vh] y h-[33.33%] y ahí sí funcó, lo mismo en tw online</li>
          <li>mejor es darle medidas relativas de w-1/2 y h-full para que el cover sea más responsive, </li>
          <li>eventualmente cuando vi el autocompletado de h-900 entendí que era mi tailwind.config.json que definí en algún momento que me estaba jodiendo todos los h, parece que sobreescribe y no agrega, o sea, solo podía usar el h-900 y ninguno otro como h-full o h-1/3 </li>
          <li>ya estaba buscando buscando en github problemas con vite react y waildin height xD no funcaba el basis-2/3 tampoco y ahora sí, qué loco, parece que indirectamente también usa el property h, documentar en vscode, por ahora no en notion</li>
          <li>incluso lo probamos con atom + tailwind CDN y ahí sí funcaba xD había que modificar, guardar y darle ctrl R o F5 para recargar la página en esta ruta file:///home/deglan/Escritorio/practicas_random/delete_mix/index.html xdddd</li>
          <li>usar hypercolor.dev para tener los gradients al toque y en tailwind encima: https://hypercolor.dev/</li>
        </ul>
      </div>
    </>
  )
}

export default PL2