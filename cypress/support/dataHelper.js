class DateHelper {

  getFormatedToday() {
    return this._formatear(new Date());
  }

  
  getFormatedFutureDate(diasAAgregar) {
    const fechaFutura = new Date();
    fechaFutura.setDate(fechaFutura.getDate() + diasAAgregar);
    return this._formatear(fechaFutura);
  }

  _formatear(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }
}

export const dateHelper = new DateHelper();