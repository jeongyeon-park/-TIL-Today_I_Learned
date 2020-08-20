import java.util.Scanner;

public class Num10950 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int totalNum= scanner.nextInt();
		int arr[]=new int[100];
		for(int i = 0; i<totalNum; i++) {
			int num1= scanner.nextInt();
			int num2= scanner.nextInt();
			arr[i]=num1+num2;
		}
		for(int i=0;i<=totalNum-1;i++)
			System.out.println(arr[i]);
	}
}
