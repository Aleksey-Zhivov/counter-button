export const formatCounterValue = (value: string | number): string => {
    const numericValue = typeof value === 'string' && !isNaN(Number(value)) ? Number(value) : value;
  
    if (typeof numericValue === 'number') {
      return numericValue > 99 ? '99+' : numericValue.toString();
    }
    
    return numericValue.length > 3 ? numericValue.slice(0, 3) : numericValue;
  };
  