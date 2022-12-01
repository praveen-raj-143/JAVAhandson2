const Calculator = (A, B, C) => 
{
	if(A == '+'){
	  return (B+C);
	}
	else if(A == '-'){
	  return (B-C);
	}else if(A == '*'){
	  return (B*C);
	}else {
	  return (B/C);
	}
    
};