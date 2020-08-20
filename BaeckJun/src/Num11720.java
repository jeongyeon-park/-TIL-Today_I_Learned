import java.util.Scanner;

public class Num11720 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		char arr[] = new char[100];
		int totalnum=scanner.nextInt();
		String str=scanner.nextLine();
		int sum=0;
		
		for(int i=0;i<totalnum;i++) {
			arr[i]=str.charAt(i);
			int num=Integer.parseInt(arr[i]);
		}
		System.out.println(sum);
	}
}
