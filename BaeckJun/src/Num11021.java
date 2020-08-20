import java.util.Scanner;

public class Num11021 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int totalNum = scanner.nextInt();
		int i=1;
		do {
			int num1= scanner.nextInt();
			int num2= scanner.nextInt();
//			if(i==1)
//				System.out.print("\n");
			System.out.println("Case #"+i+":"+" "+(num1+num2));
			i++;
		}while(i<=totalNum);
	}
}
