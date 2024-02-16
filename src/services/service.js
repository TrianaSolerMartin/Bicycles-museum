

//Método GET
export const getBicycles = async () => {
    try {
      const response = await fetch('http://localhost:3000/bicycles');
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching bicycles:', error);
    }
  };
//Método DELETE
export    const deleteBicycle = async (id) => {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, {
      method: 'DELETE'
    });
};

//Método POST
export const addBicycle = async (data) => {
  try {
      const response = await fetch('http://localhost:3000/bicycles', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          return { success: true };
      } else {
          return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
      }
  } catch (error) {
      console.error('Error:', error);
      return { success: false, error: 'Hubo un problema al añadir tu bicicleta. Por favor, intenta de nuevo más tarde.' };
  }
};

//Método PATCH
export const updateItem = async (id, newData) => {
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error('Error updatingItem');
    }

    return response.json();
  } catch (error) {
    console.error('Error updatingItem:', error);
    throw error;
  }
};

//Método GET para una bicicleta

//Método GET
export const getOneBicycle = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/bicycles/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching bicycles:', error);
  }
};