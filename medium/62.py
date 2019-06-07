class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """

        def factorial(num1, num2):
            result = 1
            for i in range(num1, num2 + 1):
                result = result * i
            return result

        l = m
        s = n
        if m < n:
            l = n
            s = m
        return factorial(l, l + s - 2) / factorial(1, s - 1)

