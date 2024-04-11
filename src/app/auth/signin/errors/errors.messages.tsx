import Snackbar from "@/app/components/snackbarComponent/Snackbar"

export const showSnackbarErrorMessage = (error: any) => {
    let snackbar: any = null

    if (error.response?.status === undefined) {
        return (<Snackbar message="Error del servidor" />)
    }

    switch (error.response?.status) {
        case 501:
            snackbar = (<Snackbar message="Error del servidor" />)
          break;
        case 401:
            snackbar = (<Snackbar message="No existe un usuario con las credenciales especificadas" />)
          break;
        default:
            snackbar = (<Snackbar message="Error al iniciar sesión" />)
          break;
      }
    return snackbar
}