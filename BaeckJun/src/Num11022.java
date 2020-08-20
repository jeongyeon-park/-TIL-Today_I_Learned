import java.util.Scanner;

public class Num11022 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int arr[]= new int[100];
		int totalnum =scanner.nextInt();
		for(int i =1;i<=totalnum;i++) {
			if(i==1)
				System.out.println(" ");
			int num1=scanner.nextInt();
			int num2=scanner.nextInt();
			System.out.println("Case #"+i+":"+" "+num1+" "+"+"+" "+num2+" "+"="+" "+(num1+num2));
		}
	}
}
