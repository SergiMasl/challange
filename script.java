class Ex1 {
	public static int findAvg(int x[], int n)
	{
		Arrays.sort(x);

    if (n % 2 != 0)
			return (int)x[n / 2];

		return (int)(x[(n - 1) / 2] + x[n / 2]) / 2;
	}

	// Driver program
	public static void main(String args[])
	{
		int x[] = { 1, 3, 4, 2, 7, 5, 8, 6 };
		int n = x.length;
		System.out.println("Median = " + findAvg(x, n));
	}
}
