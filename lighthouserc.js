module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm start',  // Command to start the app server if necessary
        url: ['https://rcwtest.rcwilley.com/'],  // Add URLs you want to test
        numberOfRuns: 3,  // Define the number of runs for averaging scores
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.9 }],
          'categories:accessibility': ['error', { minScore: 0.9 }],
          'categories:best-practices': ['error', { minScore: 0.9 }],
          'categories:seo': ['error', { minScore: 0.9 }],
        },
      },
      upload: {
        target: 'filesystem',
        outputDir: './lighthouse-report',  // Directory to save reports
      },
    },
  };