import Snackbar from "@/app/components/snackbarComponent/Snackbar"

export const showSignUpSnackbarErrorMessage = (error: any) => {
  let snackbar: any = null

  if (error.response?.status === undefined) {
    return (<Snackbar message="Error del servidor" />)
  }

  switch (error.response.status) {
    case 501:
      snackbar = (<Snackbar message="Error del servidor" />)
      break;
    case 400:
      snackbar = (<Snackbar message="Ya existe un usuario con las credenciales dadas" />)
      break;
    default:
      snackbar = (<Snackbar message="Error al crear el usuario" />)
      break;
  }

  return snackbar
}