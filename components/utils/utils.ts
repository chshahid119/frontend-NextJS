export const setEmailToLocalStorage = (id: string) => {
    try {
      localStorage.setItem('id', id);
    } catch (error) {
      console.error('Error setting email in localStorage:', error);
    }
  };
  
export const getEmailFromLocalStorage = (): string | null => {
    try {
      return localStorage.getItem('id');
    } catch (error) {
      console.error('Error getting email from localStorage:', error);
      return null;
    }
  };

export  const removeEmailFromLocalStorage = () => {
    try {
      localStorage.removeItem('id');
    } catch (error) {
      console.error('Error removing email from localStorage:', error);
    }
  };