import java.util.Scanner;

public class Num10952 {
	public static void main(String[] args) {
		int num1=1;
		int num2=1;
	
		Scanner scanner = new Scanner(System.in);
	
		for(int i=0;num1!=0 && num2!=0;i++) {
			num1 = scanner.nextInt();
			num2 = scanner.nextInt();
//			if(i==0)
//				System.out.println();
			if(num1==0 && num2==0)
				return;
			System.out.printf("%d%n",num1+num2);
		}
	}
	
}
	
