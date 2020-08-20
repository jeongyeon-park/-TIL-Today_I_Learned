import java.util.Scanner;

public class Num11718 {
	public static void main(String[] args) {
		String arr[]=new String[100];
		Scanner scanner = new Scanner(System.in);
		int i = 0;
		while(scanner.hasNextLine()) {
			arr[i]=scanner.nextLine();
			if(i==0)
				System.out.print("\n");
			System.out.println(arr[i]);
			i++;
		}
	}
}
